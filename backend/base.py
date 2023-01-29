from flask import Flask
from .ocr import parse_receipt_with_ocr_gpt

api = Flask(__name__)

@api.route('/scan-receipt')
def scan_receipt():

    receipt_items = parse_receipt_with_ocr_gpt(img_path='../assets/ItemizedReceipt.jpg')

    response_body = {
        "status": "Success!",
        "items": receipt_items
    }

    return response_body
