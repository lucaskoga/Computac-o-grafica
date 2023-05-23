from PIL import Image, ImageEnhance

# Abre a imagem cinza
img = Image.open("Imagem.jpg")
#Converte para cinza
gray_img = img.convert("L")

#Aplica o efeito de brilho
brilho = ImageEnhance.Brightness(gray_img)
img_brilho = brilho.enhance(1.4)

img_brilho.show()
