import json
from flask import Flask, request
from .ocr import parse_receipt_with_ocr_gpt

api = Flask(__name__)

@api.route('/scan-receipt', methods=['GET', 'POST'])
def scan_receipt():

    if request.method == 'POST':
        print('POST request received')
        print(request.data)
        # convert bytes to string
        request_data = request.data.decode('utf-8')
        # convert string to dict
        data = json.loads(request_data)
        data['image_path'] = data['image_path'].replace('.heic', '')
        img_path = '../assets/' + data['image_path']
    
    else:
        print('GET request received')
        img_path = '../assets/ItemizedReceipt.jpg'

    receipt_items = parse_receipt_with_ocr_gpt(img_path=img_path)

    response_body = {
        "status": "Success!",
        "items": receipt_items
    }

    return response_body
