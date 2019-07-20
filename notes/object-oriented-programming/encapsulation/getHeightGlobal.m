function height = getHeightGlobal(time)
    global iniVel; % initial velocity
    g = 9.81;
    height = iniVel*time - 0.5*g*time^2;
end