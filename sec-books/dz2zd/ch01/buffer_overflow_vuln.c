// Receive data
while ((bytesRead  = recv(clientSocket, buffer, MAX_BUFFER_SIZE, 0)) > 0) {
    // additional data will overflow
    if (offset + bytesRead >= MAX_BUFFER_SIZE) break;
    memcpy(finalBuffer + offset, buffer, bytesRead);
    offset += bytesRead;
}
