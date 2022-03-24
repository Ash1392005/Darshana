FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ajay-o-s/Darshana /root/Darshana
WORKDIR /root/Darshana/
ENV TZ=Europe/Istanbul
RUN npm install sequelize
RUN npm install supervisor -g
CMD ["node", "server/js/Darshana.js"]
