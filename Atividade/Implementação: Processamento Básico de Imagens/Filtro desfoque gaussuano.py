# Importing Image class from PIL module
from PIL import Image, ImageFilter

# Abre imagem
im = Image.open(r"Imagem.jpg")

gray_im = im.convert('L')

# Aplic ao filtro
im1 = gray_im.filter(ImageFilter.GaussianBlur(4))

# Abre a imagem
im1.show()