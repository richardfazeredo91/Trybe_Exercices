def biggest_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

def get_media(numbers):
    total = 0
    for number in numbers:
        total += number
    return round(total / len(numbers), 2)

def asterisks_square_generator(length):
    if length <= 1:
        return 'O comprimento do quadrado precisa ser maior que 1'
    else:
        for i in range(length):
            print (length * '*')

def get_biggest_name(names):
    biggest_name = ''
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name
