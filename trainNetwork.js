const Graph = require('./Graph.js');

const trainNetwork = new Graph(true, true);
const NTStation = trainNetwork.addVertex('Nairobi Terminus');
const ARStation = trainNetwork.addVertex('Athi River');
const SHStation = trainNetwork.addVertex('Sultan Hamud');
const VoiStation = trainNetwork.addVertex('Voi');
const MariakaniStation = trainNetwork.addVertex('Mariakani');
const MTStation = trainNetwork.addVertex('Mombasa Terminus');

trainNetwork.addEdge(NTStation, ARStation, 80);
trainNetwork.addEdge(ARStation, NTStation, 80);
trainNetwork.addEdge(SHStation, MariakaniStation, 200);
trainNetwork.addEdge(MariakaniStation, SHStation, 200);
trainNetwork.addEdge(MariakaniStation, MTStation, 50);
trainNetwork.addEdge(MTStation, MariakaniStation, 50);
trainNetwork.addEdge(NTStation, VoiStation, 400);
trainNetwork.addEdge(VoiStation, NTStation, 400);

trainNetwork.print();

trainNetwork.removeEdge(SHStation, MariakaniStation);
trainNetwork.removeEdge(MTStation, MariakaniStation);
trainNetwork.removeEdge(MariakaniStation, MTStation);
trainNetwork.removeVertex(MTStation);

trainNetwork.print();


