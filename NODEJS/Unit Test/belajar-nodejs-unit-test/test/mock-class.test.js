import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";


jest.mock("../src/user-repository.js");

const repository = new userRepository();
const service = new UserService(repository);

test("test mock user save", () => {

    const user = {
        id: 1,
        name: "maya"
    };

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});


test("test mock class findAll", () => {
    const user = [
        {
            id: 1,
            name: "maya"
        },
        {
            id: 2,
            name: "santi"
        }
    ];

    repository.findAll.mockReturnValueOnce(users);

    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();

})

