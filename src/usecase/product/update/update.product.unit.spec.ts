import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update.product.usecase";
import { v4 as uuid } from "uuid";

const product = new Product(uuid(), "John Walk", 45);

const input = {
  id: product.id,
  name: "John Walk Updated",
  price: 85,
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
};

describe("Unit test for product update use case", () => {
  it("should update a product", async () => {
    const productRepository = MockRepository();
    const productUpdateUseCase = new UpdateProductUseCase(productRepository);

    const output = await productUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
