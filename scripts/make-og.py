"""Generate a minimal editorial OG image (1200x630)."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630

FONT_CANDLES = [
    '/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/dejavu/DejaVuSans.ttf',
    '/usr/share/fonts/liberation/LiberationSans-Bold.ttf',
    '/usr/share/fonts/liberation/LiberationSans-Regular.ttf',
    '/usr/share/fonts/google-noto-sans-cjk/NotoSansCJK-Bold.ttc',
]


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()


bold = font(FONT_CANDLES[0], 96)
norm = font(FONT_CANDLES[1], 34)

img = Image.new('RGB', (W, H), '#F8F8F6')
d = ImageDraw.Draw(img)
d.rectangle([0, 0, W - 1, H - 1], outline='#1A1A1A', width=3)
d.text((70, 72), 'PromiseMe', font=bold, fill='#1A1A1A')
d.text((72, 240), 'Digital Solutions That Turn Ideas', font=norm, fill='#1A1A1A')
d.text((72, 290), 'Into Working Products.', font=norm, fill='#1A1A1A')
d.rectangle([70, 400, 480, 428], fill='#FFD500', outline='#1A1A1A', width=2)
d.text((70, 530), 'THINK IT. BUILD IT. AUTOMATE IT.', font=font(FONT_CANDLES[1], 18), fill='#565650')

img.save('public/og.png')
print('og.png written')