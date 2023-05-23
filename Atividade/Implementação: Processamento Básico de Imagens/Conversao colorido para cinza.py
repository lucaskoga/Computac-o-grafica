from PIL import Image

# Abre a imagem colorida
img = Image.open("median-t-Imagem.jpg")

# Converte a imagem em escala de cinza
gray_img = img.convert("L")

# Salva a nova imagem em escala de cinza
gray_img.save("median-t-Imagem.jpg")

gray_img.show() 