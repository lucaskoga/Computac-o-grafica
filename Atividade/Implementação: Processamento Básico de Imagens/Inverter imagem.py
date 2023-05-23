from PIL import Image

img = Image.open('Imagem.jpg')

# flip anti-clockwise
inverter = img.transpose(Image.FLIP_TOP_BOTTOM)

inverter.show()