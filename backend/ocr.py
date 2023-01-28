"""
this file is meant to do optical character recognition
"""
import easyocr
import cv2

from bounding_box import BoundingBox
from text_corpus import TextCorpus


# read image
img = cv2.imread('./receipt.jpg', cv2.IMREAD_COLOR)


# OCR
reader = easyocr.Reader(['en']) # this needs to run only once to load the model into memory
result = reader.readtext(img)
words_list = []
for points, text, conf in result:
    box = BoundingBox(*points, text, conf)
    words_list.append(box)

# create the text corpus
text_corpus = TextCorpus(words_list, y_delta=60)
text_corpus.filter_by_confidence()
lines = text_corpus.get_lines()
lines = text_corpus.order_lines(lines)
text_corpus.print_lines(lines)

