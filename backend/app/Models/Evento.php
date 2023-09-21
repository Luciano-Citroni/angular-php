<?php
    use App\Core\Database;

    class Evento{
        public int $id;
        public string $nome;
        public string $horario;
        public string $localizacao;

        public function getAll(){
            $query = "SELECT * FROM evento ORDER BY id DESC";

            $conn = Database::getConnection()->prepare($query);
            $conn->execute();


            if($conn->rowCount() > 0){
                $result = $conn->fetch(PDO::FETCH_OBJ);

                return $result;
            }
            else{
                return null;
            }

        }


        public function register(){
            $query = "INSERT INTO evento(nome, horario, localizacao) VALUES ('$this->nome','$this->horario','$this->localizacao')";
            $conn = Database::getConnection()->prepare($query);

            if($conn->execute()){
                $this->id = Database::getConnection()->lastInsertId();
                return $this;
            }
            else{
                print_r($conn->errorInfo());
                return null;
            }
        }


        public function getByID(int $id){
            $query = "SELECT * FROM evento WHERE id = $id";

            $conn = Database::getConnection()->prepare($query);
           
            if($conn->execute()){
                $evento =  $conn->fetch(PDO::FETCH_OBJ);

                if(!$evento){
                    return null;
                }

                $this->id = $evento->id;
                $this->nome = $evento->nome;
                $this->horario = $evento->horario;
                $this->localizacao = $evento->localizacao;

                return $this;
            }
            else{
                return null;
            }

        }



        public function update($id){
            $query = "UPDATE `evento` SET `nome`='$this->nome',`horario`='$this->horario',`localizacao`='$this->localizacao' WHERE id = $id";
            $conn = Database::getConnection()->prepare($query);

            return $conn->execute();
        }

        public function delete($id){
            $query = "DELETE FROM evento WHERE id = $id";
            $conn = Database::getConnection()->prepare($query);

            return $conn->execute();
        }

    }



?>