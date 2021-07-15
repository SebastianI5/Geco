
echo "testing whether logrotate exist"
test -x /usr/sbin/logrotate || exit 0 ;


echo "testing whether geco logrotate configuration exist"
test -x /etc/logrotate.d/geco.conf  || CREATE=1 ;

if [ -z $CREATE ]
then
    touch  /etc/logrotate.d/geco.conf ;
    echo "$PWD/geco.out {
        daily
        rotate 365
        size 5M
        compress
        dateext
        dateformat -%d%m%Y
    }" >> /etc/logrotate.d/geco.conf
fi

logrotate -d /etc/logrotate.d/geco.conf

