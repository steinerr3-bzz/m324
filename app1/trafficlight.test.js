const app = require("./trafficlight");

describe('Traffic Light Test Suite', () => {
    it('case red light', () => {
        expect(app.trafficLight("red")).toBe("Traffic light is red\nDON'T WALK!");
    });

    it('case orange light', () => {
        expect(app.trafficLight("orange")).toBe("Traffic light is orange\nATTENTION!");
    });

    it('case green light', () => {
        expect(app.trafficLight("green")).toBe("Traffic light is green\nWALK!");
    });

    it('case undefined light', () => {
        expect(app.trafficLight()).toBe("Traffic light is undefined\nOUT OF ORDER");
    });

    it('case invalid light', () => {
        expect(app.trafficLight("blue")).toBe("Traffic light is blue\nINVALID COLOR");
    });
});