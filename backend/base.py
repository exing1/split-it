from flask import Flask
from ocr import get_receipt

api = Flask(__name__)

@api.route('/scan-receipt')
def scan_receipt():

    receipt_items = get_receipt()

    response_body = {
        "status": "Success!",
        "items": receipt_items
    }

    return response_body
