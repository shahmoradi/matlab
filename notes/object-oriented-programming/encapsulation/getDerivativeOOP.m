function derivative = getDerivativeOOP(FuncObj, x)
    h = 1E-5;
    derivative = (FuncObj.getValue(x+h) - FuncObj.getValue(x))/h;
end
