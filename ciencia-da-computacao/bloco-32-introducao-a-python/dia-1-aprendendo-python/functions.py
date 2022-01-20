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

def get_liters_and_price(meters):
    import math

    liters_per_can = 18
    meters_per_can = liters_per_can * 3
    number_of_cans = math.ceil(meters / meters_per_can) 
    total_price = round(80.00 * number_of_cans, 2)

    material = (number_of_cans, f"R$: {str(total_price)}0")
    return material

def is_triangle_or_not(size1, size2, size3):
    if (size1 + size2) < size3:
        return 'Não é um triângulo'
    elif size1 == size2 == size3:
        return 'É um triângulo equilátero.'
    elif size1 == size2 or size2 == size3 or size1 == size3:
        return 'É um triângulo isósceles.'
    else:
        return 'É um triângulo escaleno.'

# Bônus

def get_smallest_number(numbers):
    smallest_number = numbers[0]
    for c, number in enumerate(numbers):
        if c != 0:
            if number < smallest_number:
                smallest_number = number
    return smallest_number

def get_left_triangle_asterisks(size):
    if size < 2:
        return 'O tamanho informado precisa ser maior que 1!'

    left_triangle = ''
    for number in range(1, size + 1):
        left_triangle += f"{number * '*'}\n"
    return left_triangle

def get_summation(number):
    total = 0
    for num in range(1, number + 1):
        total += num
    return total

def get_fuel_and_price_per_liter(liters, fuel):
    types_of_fuel = { "A": ("álcool", 2.50), "G": ("gasolina", 1,90) }
    total = types_of_fuel[fuel][1] * liters
    discount = 0.00

    if fuel == "A":
        if liters <= 20:
            discount = 0.03
        else:
            discount = 0.05
    else:
        if liters <= 20:
            discount = 0.04
        else:
            discount = 0.06
    
    total_with_discount = round(total - (total * discount), 2)
    return total_with_discount
