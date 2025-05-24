.PHONY: FORCE
.DELETE_ON_ERROR:
.SUFFIXES:

STUBS_DIR:=userscript-stubs
USERSCRIPTS_DIR:=userscripts
USERSCRIPTS:=$(notdir $(wildcard ${STUBS_DIR}/*))
export _INJECT_REQUIRED_GIT_COMMIT:=$(shell git rev-parse --short HEAD)

default: $(addprefix ${USERSCRIPTS_DIR}/,${USERSCRIPTS})


${USERSCRIPTS_DIR}/%: ${STUBS_DIR}/% FORCE
	./bin/inject-required <$< >$@
