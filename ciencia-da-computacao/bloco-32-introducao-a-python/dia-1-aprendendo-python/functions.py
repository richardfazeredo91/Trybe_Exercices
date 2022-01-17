def biggest_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

print (biggest_number(9, 6))

def get_media(numbers):
    total = 0
    for number in numbers:
        total += number
    return round(total / len(numbers), 2)

number_list = [1, 3, 6, 12, 15, 19]

print (get_media(number_list))
