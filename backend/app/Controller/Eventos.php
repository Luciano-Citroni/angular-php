<?php

use App\Core\Controller;

    class Eventos extends Controller{
        public function get(){
            $eventoModel = $this->model("Evento");

            $evento = $eventoModel->getAll();

            if(!$evento){
                http_response_code(204);
                exit;
            }

            echo json_encode($evento, JSON_UNESCAPED_UNICODE);
        }

        public function register(){
            $newEvento = $this->getRequestBody();
            $eventoModel = $this->model('Evento');

            $eventoModel->nome = $newEvento->nome;
            $eventoModel->horario = $newEvento->horario;
            $eventoModel->localizacao = $newEvento->localizacao;

            $eventoModel->register();

            if($eventoModel){
                http_response_code(200);
                echo json_encode($eventoModel);
            }
            else{
                http_response_code(200);
                echo json_encode(["erro" => "Falha ao cadastrar os dados"]);
            }

        }

        public function find($id){

            $eventoModel = $this->model('Evento');
            $eventoModel = $eventoModel->getByID($id);

            if (!$eventoModel) {
                http_response_code(404);
                echo json_encode(["erro" => "evento não encontrado"]);
                exit;
            }

            echo json_encode($eventoModel, JSON_UNESCAPED_UNICODE);

        }


        public function update($id){
            $newEvento = $this->getRequestBody();

            $eventoModel = $this->model('Evento');
            $eventoModel = $eventoModel->getByID($id);

            if (!$eventoModel) {
                http_response_code(404);
                echo json_encode(["erro" => "evento não encontrado"]);
                exit;
            }

            $eventoModel->nome = $newEvento->nome;
            $eventoModel->horario = $newEvento->horario;
            $eventoModel->localizacao = $newEvento->localizacao;


        
            $eventoModel->update($id);
    
            echo json_encode($eventoModel, JSON_UNESCAPED_UNICODE);

        }



        public function delete($id){

            $eventoModel = $this->model('Evento');
            $eventoModel = $eventoModel->getByID($id);

            if (!$eventoModel) {
                http_response_code(404);
                echo json_encode(["erro" => "evento não encontrado"]);
                exit;
            }
            return $eventoModel->delete($id);

        }

    }




?>