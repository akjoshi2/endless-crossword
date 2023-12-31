FROM --platform=linux/amd64 ubuntu:latest
RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y python3 \
  build-essential \
  git \
  wget \
  python3-pip \
  mysql-server

COPY . .

RUN cd backend/crosswordsolver && make 

RUN mv backend/crosswordsolver/cwsolver /backend
RUN pip install -r backend/requirements.txt

RUN wget https://huggingface.co/datasets/albertxu/CrosswordQA/resolve/refs%2Fconvert%2Fparquet/default/train/0000.parquet

RUN python3 backend/db.py
ENV FLASK_APP=api.py
RUN mv crossword backend/crossword
EXPOSE 8080
WORKDIR /backend
CMD ["gunicorn" , "-b", "0.0.0.0:8080",   "api:app"]

