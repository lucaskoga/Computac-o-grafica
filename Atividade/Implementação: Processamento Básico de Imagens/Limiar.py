from PIL import Image
#Abre a imagem
img = Image.open("Imagem.jpg")
#Converte para Cinza
gray_image = img.convert('L')

threshold = 200
#Aplica a Limiarização
limiar = gray_image.point(lambda  pixel: 0 if pixel < threshold else 255)

limiar.show()