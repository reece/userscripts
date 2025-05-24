.PHONY: FORCE
.DELETE_ON_ERROR:
.SUFFIXES:

STUBS_DIR:=userscript-stubs
USERSCRIPTS_DIR:=userscripts
USERSCRIPTS:=$(notdir $(wildcard ${STUBS_DIR}/*))

default: $(addprefix ${USERSCRIPTS_DIR}/,${USERSCRIPTS})


${USERSCRIPTS_DIR}/%: ${STUBS_DIR}/%
	./bin/inject-required <$< >$@
