classdef ProjectileHeight

    properties
        g = 9.81;
        iniVel; % initial velocity
    end

    methods (Access = public)

        % This is the class constructor
        function ProjectileHeightObject = ProjectileHeight(iniVel)
            ProjectileHeightObject.iniVel = iniVel;
        end

        % Computes the height of the Projectile motion for a given time and initial velocity: iniVel
        function height = getValue(ProjectileHeightObject,time)
            height = ProjectileHeightObject.iniVel * time - 0.5 * ProjectileHeightObject.g * time^2;
        end

    end

end
