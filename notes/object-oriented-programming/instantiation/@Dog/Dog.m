classdef Dog

    properties

        % class attributes
        species = 'mammal';

        % instance attributes
        age;
        name;
        race;
        color;

    end

    methods (Access = public)

        % This is the class constructor
        function DogObj = Dog(age,name,race,color)
            % instance attributes
            DogObj.age = age;
            DogObj.name = name;
            DogObj.race = race;
            DogObj.color = color;
        end

    end

end
