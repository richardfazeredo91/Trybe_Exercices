import requests

def get_data_url(url):
    return requests.get(url)

httpbin_content = get_data_url('https://httpbin.org/encoding/utf8').text

print(httpbin_content)
