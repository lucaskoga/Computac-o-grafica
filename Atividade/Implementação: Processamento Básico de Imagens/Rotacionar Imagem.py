from PIL import Image
#Abre a imagem
img = Image.open("Imagem.jpg")

#Converte para cinza
gray_img = img.convert("L")
#Angulo para rotacionar
angulo = 90
#Rotaciona a imagem e abre
gray_img.rotate(angulo).show()
