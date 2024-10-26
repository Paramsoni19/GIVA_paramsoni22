const pool = require("../db");
const { CREATED, SUCCESS, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require('../utils/responseManager');

const createProduct = async (productBody) => {
	const {name, description, price, quantity } = productBody;
	console.log(name);

    const newProduct = await pool.query(
      "INSERT INTO todo (name, description, price, quantity) VALUES($1, $2, $3, $4) RETURNING *",
      [name, description, price, quantity]
    );


	return {
		code: CREATED.code,
		message: 'Product created',
		data: newProduct.rows[0],
	};
};

const queryProducts = async (filter, options) => {
	const allProducts = await pool.query("SELECT * FROM todo");
  
	if (allProducts.rowCount === 0) {
	  return {
		code: 404,
		message: "No products found",
		data: [],
	  };
	}
  
	return {
	  code: SUCCESS.code,
	  message: "Products retrieved",
	  data: allProducts.rows,
	};
};

// const getProductById = async (productId) => {
//     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       todo_id
//     ]);

// 	return {
// 		code: SUCCESS.code,
// 		message: 'Product retrieved',
// 		data: product,
// 	};
// };

// const getProductByEmail = async (productId) => {
// 	const allTodos = await pool.query("SELECT * FROM todo");

// 	return {
// 		code: SUCCESS.code,
// 		message: 'Product retrieved',
// 		data: product,
// 	};
// };

const updateProductById = async (productId, productBody) => {
	const { name, description, price, quantity } = productBody;
	console.log(productId);
  
	const updatedProduct = await pool.query(
	  "UPDATE todo SET name = $1, description = $2, price = $3, quantity = $4 WHERE todo_id = $5 RETURNING *",
	  [name, description, price, quantity, productId]
	);
  
	if (updatedProduct.rowCount === 0) {
	  return {
		code: 404,
		message: "Product not found",
		data: null,
	  };
	}
  
	return {
	  code: SUCCESS.code,
	  message: "Product updated",
	  data: updatedProduct.rows[0],
	};
  };
  

// const updateProductById = async (productId) => {
// 	const { todo_id } = productBody;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

// 	return {
// 		code: SUCCESS.code,
// 		message: 'Product updated',
// 		data: product,
// 	};
// };



// const getAllProducts = async () => {
// 	const allProducts = await pool.query("SELECT * FROM todo");
  
// 	if (allProducts.rowCount === 0) {
// 	  return {
// 		code: 404,
// 		message: "No products found",
// 		data: [],
// 	  };
// 	}
  
// 	return {
// 	  code: SUCCESS.code,
// 	  message: "Products retrieved",
// 	  data: allProducts.rows,
// 	};
//   };
  


// const deleteProductById = async (productId) => {
//     const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
//       todo_id
//     ]);

// 	return {
// 		code: SUCCESS.code,
// 		message: 'Product deleted',
// 		data: product,
// 	};
// };

const deleteProductById = async (productId) => {
	console.log(productId);
  
	const deletedProduct = await pool.query(
	  "DELETE FROM todo WHERE todo_id = $1 RETURNING *", 
	  [productId]
	);
  
	if (deletedProduct.rowCount === 0) {
	  return {
		code: 404,
		message: "Product not found",
		data: null,
	  };
	}
  
	return {
	  code: SUCCESS.code,
	  message: 'Product deleted',
	  data: deletedProduct.rows[0],
	};
  };
  

module.exports = {
	createProduct,
	queryProducts,
	// getProductById,
	// getProductByEmail,
	// getAllProducts,
	updateProductById,
	deleteProductById,
};
