console.log = function() {};
const { expect } = require('chai');
const rewire = require('rewire');
const Vertex = require('../Vertex');

describe('Vertex class', function() {
  it('should define a constructor that sets the argument to the `data` property and an empty array to the `edges` property', function() {
    // Check constructor
    const vertex = new Vertex('TEST DATA');
    expect(vertex, 'Encountered error with the `Vertex` class. Check the constructor method.').to.be.an.instanceOf(Vertex);

    // Check data was set among class properties
    const vertexProp = Object.keys(vertex);
    
    let foundProp = '';
    if (vertexProp.length) {
      foundProp = ` We found the following properties instead: ${vertexProp.join(', ')}`;
    }
    const dataErrorMessage = `Does the \`Vertex\` class have a property called \`data\`?`;
    expect(vertexProp, `${dataErrorMessage}${foundProp}`).to.include('data');
    
    const edgesErrorMessage = `Does the \`Vertex\` class have a property called \`edges\`?`;
    expect(vertexProp, `${edgesErrorMessage}${foundProp}`).to.include('edges');

    expect(vertex.data, 'Make sure the `data` property is set to the constructor argument.').to.equal('TEST DATA');

    expect(vertex.edges, 'Make sure the `edges` property is set to an empty array.').to.be.an('array')
    expect(vertex.edges.length, 'Make sure the `edges` property is set to an empty array.').to.equal(0);
  });
});