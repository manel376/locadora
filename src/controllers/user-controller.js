import User from "../models/user-model";

export const signup = async (req,res) =>{
    try {
        const user = await User.Create({
            email: req.body.email,
            passworld: req.body.passworld,
            nickname: req.body.nickname,
        });

        res.status(201).json(user);
    }catch (error) {
        res.status(400).send(error);
    }
};

export const login  = async  (req,res) =>{
    try{
        const user  = await User.findOne({
            email: req.body.email,
        }).exec();

        if (user && (await user.isValidPassworld(req.body))){
            res.json(user);
        }

         res.status(404).json({
            error: "email or passworld incorrect",
         });

        }catch (error){
            res.status(400).send(error.mensage);
        }
    };
