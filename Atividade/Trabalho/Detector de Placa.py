import cv2
import numpy as np
import pytesseract


pytesseract.pytesseract.tesseract_cmd = r'C:\Arquivos de programas\Tesseract-OCR\tesseract' 
plateCascade = cv2.CascadeClassifier('haarcascades/haarcascade_russian_plate_number.xml')

img = cv2.imread('imagens/visao5.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
suavizada = cv2.blur(gray, (5,5))

_, bin = cv2.threshold(suavizada, 147, 255, cv2.THRESH_BINARY)


plates = plateCascade.detectMultiScale(bin)

for (x,y,w,h) in plates:
    cv2.rectangle(gray,(x,y),(x+w,y+h),(255,10,10),20)
    plate = bin[y: y+h, x:x+w]
    cv2.imshow("plate", plate)


placaEscrito = pytesseract.image_to_string(bin, lang = 'eng')
print('A placa Detectado eh: ', placaEscrito)

cv2.waitKey(0)
cv2.destroyAllWindows