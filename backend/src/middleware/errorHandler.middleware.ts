import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  error, 
  req, 
  res, 
  next
): any => {
  console.error(`Error Occurred on PATH: ${req.path} `, error);

  if(error instanceof SyntaxError) {
    return res.status(400).json({
      message: "Invalid JSON payload passed.",
    });
  }     
  return res.status(500).json({
    message: "Internal server error",
    error: error.message || "Something went wrong"
  });
}