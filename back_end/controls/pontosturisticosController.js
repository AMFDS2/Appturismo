const Pontos = require('../models/pontosturisticosModel.js')

exports.getPontosturisticos = async(req, res) => {
    try {
        const pontosturisticos = await Pontos.PontosturisticosModel.find();
        console.log("testando aqui !!!" + pontosturisticos);
        res.json(pontosturisticos);
        
        //res.send(Clientes);
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getonePontosturisticos = async (req, res) => {   
  try {;
    res.status(201).json(await Pontos.PontosturisticosModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createPontosturisticos = async (req, res) => {   
    try {;
      res.status(201).json(await Pontos.PontosturisticosModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updatePontosturisticos = async (req, res) => {   
    try {;
      res.status(201).json(await Pontos.PontosturisticosModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deletePontosturisticos = async (req, res) => {   
    try {;
      res.status(201).json(await Pontos.PontosturisticosModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  exports.getonePontosturisticosid = async (req, res) => {         
      try {

        const cpf = parseInt(req.params.id); // CPF a ser pesquisado
        const pontosturisticos = await Pontos.PontosturisticosModel.findOne({ cpf: cpf }); // Procura cliente por CPF        

        if (!pontosturisticos) {
          return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.status(200).json(pontosturisticos);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  };
