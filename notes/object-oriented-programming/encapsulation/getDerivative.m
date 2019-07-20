function derivative = getDerivative(func, x)
    h = 1E-5;
    derivative = (func(x+h) - func(x))/h;
end