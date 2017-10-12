variable "name" {
  description = "The name of the lambda to create, which also defines (i) the archive name (.zip), (ii) the file name, and (iii) the function name"
  default = "lambda"
}

variable "runtime" {
  description = "The runtime of the lambda to create"
  default     = "nodejs6.10"
}

variable "handler" {
  description = "The handler name of the lambda (a function defined in your lambda)"
  default     = "handler"
}
variable "zip_file_path" {
  description = "path of the zip file"
  default     = "./"
}

module "role"{
  source = "./role"
}

resource "aws_lambda_function" "lambda" {
  filename      = "${var.zip_file_path}${var.name}.zip"
  function_name = "${var.name}_lambda_${var.handler}"
  handler       = "${var.name}_lambda_${var.handler}.${var.handler}"
  role          = "${module.role.role}"
  runtime       = "${var.runtime}"
  source_code_hash = "${base64sha256(file("${var.zip_file_path}${var.name}.zip"))}"
}

output "name" {
  value = "${aws_lambda_function.lambda.function_name}"
}

output "arn" {
  value = "${aws_lambda_function.lambda.arn}"
}
