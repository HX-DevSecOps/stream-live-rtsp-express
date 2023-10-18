startFFMpeg() {
    echo "Starting ..."

    killall -9 ffmpeg

    ffmpeg -re -stream_loop -1 -i earth.mp4 -c copy -f rtsp rtsp://localhost:8554/mystream

    echo "FFMpeg started."
}

startFFMpeg
