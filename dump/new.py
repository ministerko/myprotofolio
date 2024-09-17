import imageio
from skimage import filters, color, io
import numpy as np

# Load the image
img = imageio.imread('kelvin.png')

# Check if the image has an alpha channel
if img.shape[2] == 4:
    # Remove the alpha channel by taking only the RGB channels
    img = img[:, :, :3]

# Convert the image to grayscale
gray_img = color.rgb2gray(img)

# Apply edge detection
edges = filters.sobel(gray_img)

# Convert the edges to 8-bit format
edges_8bit = (edges * 255).astype(np.uint8)

# Save and display
io.imsave('cartoonized_image.png', edges_8bit)
io.imshow(edges_8bit)
io.show()
