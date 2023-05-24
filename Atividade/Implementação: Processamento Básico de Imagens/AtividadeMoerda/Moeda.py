import cv2
import numpy as np

# Carrega a imagem em escala de cinza
img = cv2.imread('moedas.jpg', cv2.IMREAD_GRAYSCALE)

# Aplica a detecção de bordas usando o operador Canny
edges = cv2.Canny(img, 160, 300)

# Aplica a detecção de círculos usando a transformada de Hough de círculos
circles = cv2.HoughCircles(edges, cv2.HOUGH_GRADIENT, 1, 50,
                           param1=20, param2=30, minRadius=10, maxRadius=0)

# converte as coordenadas do círculo em inteiros
circles = np.uint16(np.around(circles))

# Desenha os círculos detectados na imagem
for i in circles[0, :]:
    # desenha o círculo externo
    cv2.circle(img, (i[0], i[1]), i[2], (0, 255, 0), 2)
    # desenha o centro do círculo
    cv2.circle(img, (i[0], i[1]), 2, (0, 0, 255), 3)

# Conta o número de círculos detectados
num_circles = len(circles[0])

#Dilatação ou erosão de objetos, preenchimento de lacunas em objetos
cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))

# Mostra a imagem com os círculos detectados
cv2.imshow('Detecção de moedas', img)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Exibe o número de moedas detectadas
print("Número de moedas na imagem:", num_circles)
