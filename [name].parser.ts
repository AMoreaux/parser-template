import { LibsType } from '../global-libs';

// These types will be used to check that pipe of parsers matched.
export type InputDataType = /* Declare the type of the data required to execute your parser */;
export type OutputDataType = /* Declare the type of the data that your parser produce */;
export type OptionsType = /* If your parser has options, declare the option types here */;

export default async function (
  inputData: InputDataType,
  options: OptionsType,
  libs: LibsType,
): OutputDataType {
  try {
    // you code here
  } catch (err) {
    throw err;
  }
}
