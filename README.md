# Split-it
An AI-powered app that helps you split the bill with your friends. 

This is a beautiful React app supported by a Python backend, where we used Optical Character Recognition (OCR) and ChatGPT to build a general-purpose receipt parser that achieves state-of-the-art performance (as far as we know).

## Demo
![receipt](assets/receipt.jpg)
![paserd_result](assets/parsed_result.png)
![landing_page](assets/landing_page.png)


## setting up
```bash
# create python virtual environment
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
# install the npm packages
npm install
```


## running
```bash
# run the flask server
flask --app base run
# run the react app
npm start
```
