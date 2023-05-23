from PIL import Image, ImageEnhance

# Abre a imagem cinza
img = Image.open("Imagem.jpg")
#Converte para cinza
gray_img = img.convert("L")

#Aplica o contraste
contrast = ImageEnhance.Contrast(gray_img)
img_contrast = contrast.enhance(1.5)


img_contrast.show()

