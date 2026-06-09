from PIL import Image
import numpy as np
from scipy import ndimage

# Load original at full res, then resize FIRST, then process
orig = Image.open('public/gojo-domain-original.png').convert('RGBA')

# Resize to mobile size BEFORE background removal
mobile_orig = orig.resize((540, 720), Image.LANCZOS)

# Force alpha to 255 (no semi-transparent from resize)
data = np.array(mobile_orig, dtype=np.int32)
data[:,:,3] = 255

w, h = mobile_orig.size
r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
brightness = (r + g + b) / 3

# Same Non-White Mask + Dilation at mobile resolution
is_character = (brightness < 210) | ((r < 180) & (g < 180) & (b < 180))

# Dilation proportional to mobile size (25px on 1086 → 12px on 540)
dilation = 12
character_mask = ndimage.binary_dilation(is_character, iterations=dilation)

# Remove everything outside mask
for y in range(h):
    for x in range(w):
        if not character_mask[y, x]:
            data[y, x, 3] = 0

# Threshold alpha: no semi-transparent
for y in range(h):
    for x in range(w):
        data[y, x, 3] = 255 if data[y, x, 3] > 127 else 0

out = Image.fromarray(data.astype(np.uint8))
out.save('public/gojo-domain-mobile.png', 'PNG', optimize=True)

# Verify
pixels = list(out.getdata())
total = len(pixels)
transparent = sum(1 for p in pixels if p[3] == 0)
opaque = sum(1 for p in pixels if p[3] == 255)
semi = total - transparent - opaque
print(f'After reprocess: transparent={transparent/total*100:.1f}%, opaque={opaque/total*100:.1f}%, semi={semi/total*100:.1f}%')

# Check key areas
print('=== Pixel check ===')
for x, y, label in [(270, 250, 'hair top'), (270, 325, 'hair mid'), (270, 400, 'face'), (270, 475, 'chin'), (180, 520, 'left hand'), (360, 520, 'right hand'), (270, 600, 'chest')]:
    px = out.getpixel((x, y))
    status = 'OK' if px[3] == 255 else f'MISSING(a={px[3]})'
    print(f'{label:15s}: rgb{px[:3]} [{status}]')

import os
print(f'\nFile size: {os.path.getsize("public/gojo-domain-mobile.png")/1024:.0f}KB')
