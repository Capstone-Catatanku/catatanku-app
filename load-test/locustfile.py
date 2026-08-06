import json

from locust import HttpUser, task, between


class CatatanKuUser(HttpUser):

    wait_time = between(1, 3)

    @task
    def dashboard(self):
        self.client.get("/dashboard")

    @task
    def riwayat_transaksi(self):
        self.client.get("/transaksi")

    @task
    def analisis_keuangan(self):
        self.client.get("/analisis")