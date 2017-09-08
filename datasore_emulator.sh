#!/bin/bash
gcloud beta emulators datastore start
$(gcloud beta emulators datastore env-init)
$(gcloud beta emulators datastore env-unset)
