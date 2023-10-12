 start:
	docker run --rm -d -it \
	-e MTX_PROTOCOLS=tcp \
	-p 8554:8554 \
	-p 1935:1935 \
	-p 8888:8888 \
	-p 8889:8889 \
	-p 8890:8890/udp \
	bluenviron/mediamtx

rtsp: start
	ffmpeg -re -stream_loop -1 -i earth.mp4 -c copy -f rtsp rtsp://localhost:8554/mystream

live-rtsp: 
	cd rtsp-relay && npm install && npm start

