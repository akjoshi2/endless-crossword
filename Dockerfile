FROM --platform=linux/amd64 ubuntu:latest
WORKDIR /app

RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y python3 \
  build-essential \
  git \
  curl 

RUN cd backend

COPY . /app

RUN cd crosswordsolver && make

COPY target/crosswordsolver /app

RUN pip install -r requirements.txt

RUN curl https://huggingface.co/datasets/albertxu/CrosswordQA/blob/refs%2Fconvert%2Fparquet/default/train/0000.parquet --output 0000.parquet

RUN python3 db.py
ENV FLASK_APP=api.py
COPY . /app
EXPOSE 8080
CMD ["gunicorn" , "api:app", "--bind 0.0.0.0:8080", "--log-level=debug", "--workers=4"]
