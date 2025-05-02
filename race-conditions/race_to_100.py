import threading
import time

def increase_by_10():
    for i in range(1, 10):
        print(f"Thread {threading.current_thread().name}: {i}0% complete")

# create two threads
thread1 = threading.Thread(target=increase_by_10, name="Thread-1")
thread2 = threading.Thread(target=increase_by_10, name="Thread-2")

#start threads
thread1.start()
thread2.start()