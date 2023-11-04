FROM --platform=linux/amd64 ubuntu:latest
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y python3 \
  build-essential \
  git \

RUN git clone https://github.com/akjoshi2/endless-crossword.git && cd endless-crossword && cd backend

RUN make 
