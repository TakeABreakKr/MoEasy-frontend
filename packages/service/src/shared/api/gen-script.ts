import ts from 'typescript';
import { writeFileSync } from 'fs';
import openapiTS, { astToString } from 'openapi-typescript';

const FILE = ts.factory.createTypeReferenceNode('File'); // `File`
const NULL = ts.factory.createLiteralTypeNode(ts.factory.createNull()); // `null`

const generateTypes = async () => {
  const ast = await openapiTS(new URL('./swagger-spec.json', import.meta.url), {
    transform(schemaObject) {
      if (schemaObject.type === 'string' && schemaObject.format === 'binary') {
        return schemaObject.nullable ? ts.factory.createUnionTypeNode([FILE, NULL]) : FILE;
      }
    },
  });
  const contents = astToString(ast);

  // (optional) write to file
  writeFileSync(new URL('./my-schema.ts', import.meta.url), contents);
};

generateTypes();
