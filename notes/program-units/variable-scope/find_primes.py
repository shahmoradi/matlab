#!/usr/bin/env python

def is_prime(n):
    
    is_prime = True
    
    def is_divisible(n,divisor):
        if n<2*divisor: return False
        if n%divisor==0: return True
        else:
            divisor += 1
            return is_divisible(n,divisor)

    if is_divisible(n,divisor=2): is_prime=False
    return is_prime

def get_primes(n):
    if n == 1:
        return
    else:
        if is_prime(n):
            print(n)
        n -= 1
        get_primes(n)


if __name__ == "__main__":

    print('Enter an integer number: ')
    n = int(input('n = '))
    print('\n Here is a list of all prime numbers smaller than {}:'.format(n))
    get_primes(n)